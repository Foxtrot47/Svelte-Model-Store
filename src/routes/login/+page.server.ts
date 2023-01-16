import type { Actions } from './$types';
import connection from '$lib/server/mysql';

import * as argon2 from "argon2";

export const actions: Actions = {
	default: async ({ cookies, request }) => {
        try {
            const data = await request.formData();

            if (data.get("email") === null || data.get("password") === null)
                return {success: 0, message: "Email or password is missing"};

            const [rows] = await connection.execute("CALL spGetUser(?)", [data.get("email")]);

            if (!Array.isArray(rows) || rows.length < 1 || !Array.isArray(rows[0]) || rows[0].length < 1 )
                return {success: 0, message: "Mail does not exist"};

            if(await argon2.verify(rows[0][0].Password,  data.get("password") as string))
                return {success: 1, message: "Login success"};
            else
                return {success: 0, message: "Password mismatch"};
        }
        catch (err) {
            console.log(err);
            return {success: 0, message: "Unknown error occured"}
        }
	}
};
