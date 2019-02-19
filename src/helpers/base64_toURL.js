export default function convert(image){
  const base64=image;
  const buffer=Uint8Array.from(atob(base64), c => c.charCodeAt(0));
  const blob=new Blob([buffer], { type: "image/gif" });
  const url=URL.createObjectURL(blob);
  console.log(url);
    return url
}
