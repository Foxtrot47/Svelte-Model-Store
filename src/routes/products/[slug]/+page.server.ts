import type { PageServerLoad } from './$types';
import models from '$lib/server/mysql';
import { productpropertyvalue_localization } from '$lib/models/productpropertyvalue_localization';
import { productproperty_localization } from '$lib/models/productproperty_localization';
import { Op } from 'sequelize';
import { productgroup } from '$lib/models/productgroup';

export const load = (async ({ params }) => {
	if (params.slug == null) return;

	const productInfo = await models.product_localization.findOne({
		where: { URL: params.slug, LocalizationID: 1 },
		raw: true
	});

	if (productInfo != null) {
		const images = await models.productimages.findAll({
			where: { ProductID: productInfo.ProductID },
			raw: true
		});

		const productDescriptionRow = await models.productdescription.findOne({
			where: { ProductID: productInfo.ProductID, LocalizationID: 1 }
		});

		const productDescription = productDescriptionRow?.ProductDescriptionHTML;

		const productPrice = await models.productprice.findOne({
			where: { ProductID: productInfo.ProductID },
			raw: true
		});

		// Fetching product highlights
		const productHighlights = await models.productproperty.findAll({
			include: [
				{
					model: productproperty_localization,
					as: 'productproperty_localizations',
					required: true
				},
				{ model: productpropertyvalue_localization, as: 'productpropertyvalue_localizations' }
			],
			where: {
				ParentPropertyID: await models.productproperty_localization
					.findOne({
						where: { PropertyName: 'Highlights' }
					})
					.then((row) => {
						return row?.dataValues.ProductPropertyID;
					})
			},
			raw: true
		});

		const productLongDescription = await models.productdescription
			.findOne({
				where: { ProductID: productInfo.ProductID }
			})
			.then((row) => {
				return String(row?.dataValues.ProductDescriptionHTML);
			});

		// Fetching all groups which include product
		let productGroupsList;
		let productGroupdIDs;
		let productGroupdID = await models.productgroupmembership
			.findOne({
				where: { ProductID: productInfo?.ProductID },
				raw: true
			})
			.then((row) => {
				return row?.ProductGroupID;
			});
		let loopCondition = true;
		while (loopCondition) {
			const group = await models.productgroup.findOne({
				where: { ProductGroupID: productGroupdID },
				raw: true
			});
			if (group != null && group.ProductGroupID != 0) {
				if (productGroupsList == undefined)
					productGroupsList = [group];
				else
					productGroupsList.push(group);
				if (productGroupdIDs == undefined)
					productGroupdIDs = [group.ProductGroupID];
				else
					productGroupdIDs.push(group.ProductGroupID);
				if (group.ParentGroupID != null && group.ParentGroupID != 0)
					productGroupdID  = group.ParentGroupID;
				else
				loopCondition = false;
			}
			else
				loopCondition = false;
		}
		//Fetching technical information
		if (productGroupdIDs != undefined) {
			const productProperties = await models.productproperty.findAll({
				include: [
					{
						model: productproperty_localization,
						as: 'productproperty_localizations',
						required: true
					},
					{
						model: productpropertyvalue_localization,
						as: 'productpropertyvalue_localizations',
						required: true
					}
				],
				where: {
					[Op.or]: [
						{ ProductID: productInfo?.ProductID },
						{
							ProductGroupID: {
								[Op.in]: productGroupdIDs
							}
						}
					],
	
					
				},
				raw: true
			});
		}
		return {
			message: null,
			productInfo,
			images,
			productDescription,
			productPrice,
			productHighlights,
			productLongDescription
		};
	}
	return {
		message: 'Nothing found',
		productInfo: null,
		images: null,
		productDescription: null,
		productPrice: null,
		productHighlights: null,
		productLongDescription: null
	};
}) satisfies PageServerLoad;
