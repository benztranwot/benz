import { GraphQLClient, gql } from "graphql-request";
import { SECRET_HYGRAPH_ENDPOINT } from "$env/static/private";

export async function load() {
	const hygraph = new GraphQLClient(SECRET_HYGRAPH_ENDPOINT);

	const QUERY = gql`
		query MyQuery {
			features {
				id
				heading
				description
				daisyColor
				technologies {
					id
					name
					iconifyCode
					color
				}
				image {
					url
				}
			}
		}
	`;

	const result = await hygraph.request(QUERY);

	return result;
}
