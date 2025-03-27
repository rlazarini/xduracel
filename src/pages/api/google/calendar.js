// import { GoogleSpreadsheet } from 'google-spreadsheet';
// import { JWT } from 'google-auth-library';

// const {
//   VITE_GOOGLE_PROJECT_KEY: project_id,
//   VITE_GOOGLE_PROJECT_KEY_ID: private_key_id,
//   VITE_GOOGLE_PROJECT_PRIVATE_KEY: private_key,
//   VITE_GOOGLE_PROJECT_CLIENT: client_email,
//   VITE_GOOGLE_PROJECT_CLIENT_ID: client_id,
// } = import.meta.env;

// export const get = async ({ request, cookies }) => {
//   const credentials = {
//     "type": "service_account",
//     "project_id": project_id,
//     "private_key_id": private_key_id,
//     "private_key": private_key,
//     "client_email": client_email,
//     "client_id": client_id,
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xduracel%40spreadsheets-api-395301.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }
//   const serviceAccountAuth = new JWT({
//     email: credentials.client_email,
//     key: credentials.private_key,
//     scopes: [
//       'https://www.googleapis.com/auth/spreadsheets',
//     ],
//   });

//   const docId = '1LcXIhp9FugbEnd1pKqex3Gd2M8jeV6TjioZ2DdMJ23k'
//   const doc = new GoogleSpreadsheet(docId, serviceAccountAuth);
//   await doc.loadInfo();
//   const sheet = doc.sheetsByIndex[0]
//   const rows = await sheet.getRows()
//   const listOfRows = []
//   for (let row of rows) {
//     listOfRows.push(row.toObject())
//     console.log("ROW : :", row.toObject())
//   }

//   return new Response(JSON.stringify(listOfRows))
// }