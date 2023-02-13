import type { PageServerLoad } from './$types';
import connection from '$lib/server/mysql';

export const load = ( async ({ params }) => {

	if (params.slug == null)
		return;

	const [rows] = await connection.execute("CALL spGetProductInfoByURL(?,?)", [params.slug,1]);

	if (Array.isArray(rows) && rows.length > 0 && Array.isArray(rows[0]) && rows[0].length > 0 ) {

		const [imageRows] = await connection.execute("CALL spGetProductImages(?)", [rows[0][0].ProductID]);

		if (Array.isArray(imageRows) && imageRows.length > 0 && Array.isArray(imageRows[0]) && imageRows[0].length > 0 ) {
			return {
				message: null,
				productInfo: rows[0][0],
				images: imageRows[0]
			};
		}
	}
	return {
		message: "Nothing found",
		productInfo: null,
		images: null
	};

}) satisfies PageServerLoad;