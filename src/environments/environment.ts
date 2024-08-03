export const environement = {
  // Use Github secret instead of .env
  apiURL: ${{ secrets.API_URL }},
  cookieIdentifier: "token"
}
