import type { PageServerLoad } from './$types';
import models from '$lib/server/mysql';

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

		return {
			message: null,
			productInfo,
			images,
			productDescription,
			productPrice
		};
	}
	return {
		message: 'Nothing found',
		productInfo: null,
		images: null,
		productDescription: null,
		productPrice: null
	};
}) satisfies PageServerLoad;
