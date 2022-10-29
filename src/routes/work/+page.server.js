import { GraphQLClient, gql } from "graphql-request";
import { SECRET_HYGRAPH_ENDPOINT } from "$env/static/private";

export async function load() {
	const hygraph = new GraphQLClient(SECRET_HYGRAPH_ENDPOINT);

	const QUERY = gql`
		query Assets {
			projects(first: 50) {
				id
				name
				description
				projectCode
				projectLink
				technologies {
					id
					name
					iconifyCode
					color
				}
				featuredImage {
					url(
						transformation: {
							image: { resize: { width: 720 } }
							document: { output: { format: webp } }
						}
					)
				}
				categories {
					name
				}
			}
			categories(orderBy: position_ASC) {
				id
				name
				daisyColor
				projects(first: 50) {
					id
				}
			}
		}
	`;

	const result = await hygraph.request(QUERY);

	return result;
}
