import type { PageServerLoad } from './$types';
import models from '$lib/server/mysql';
import { productpropertyvalue_localization } from '$lib/models/productpropertyvalue_localization';
import { productproperty_localization } from '$lib/models/productproperty_localization';
import { Sequelize } from 'sequelize';

export const load = (async ({ params }) => {
	if (params.slug == null) return;

	const productInfo = await models.product_localization.findOne({
		where: { URL: params.slug, LocalizationID: 1},
		raw: true,
	});
	
	if (productInfo != null ) {
		const images = await models.productimages.findAll({
			where: { ProductID: productInfo.ProductID},
			raw: true,
		});

		const productDescriptionRow = await models.productdescription.findOne({
			where: { ProductID: productInfo.ProductID, LocalizationID: 1},
		})

		const productDescription = productDescriptionRow?.ProductDescriptionHTML

		const productPrice = await models.productprice.findOne({
			where: {ProductID: productInfo.ProductID},
			raw: true,
		})

		// Fetching product highlights
		const productHighlights = await models.productproperty.findAll({
			include: [
				{ 
					model: productproperty_localization,
					as: "productproperty_localizations",
					required: true,
				},
				{ model: productpropertyvalue_localization, as: "productpropertyvalue_localizations"}
			],
			where: {
				ParentPropertyID: await models.productproperty_localization.findOne({
					where: { PropertyName: "Highlights" }
				}).then((row) => {
					return row?.dataValues.ProductPropertyID;
				})
			},
			raw: true
		});

		return {
			message: null,
			productInfo,
			images,
			productDescription,
			productPrice,
			productHighlights
		};
	}
	return {
		message: 'Nothing found',
		productInfo: null,
		images: null,
		productDescription: null,
		productPrice: null,
		productHighlights: null
	};
}) satisfies PageServerLoad;
