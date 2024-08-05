export const environement = {
  // Use Github secret instead of .env
  apiURL: import.meta.env["NG_APP_API_URL"],
  cookieIdentifier: "token"
}
