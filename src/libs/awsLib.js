import { Storage, Auth } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  });

  return stored.key;
}

export async function s3Delete(key){

  Storage.vault.remove(key)
      .then(result => alert(key + result))
      .catch(err => alert(err));

}
