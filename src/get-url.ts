export default function getURL(os: string, extended: string, version: string): string {
  const extendedStr = (extended: string): string => {
    if (extended === 'true') {
      return 'extended_';
    } else {
      return '';
      // } else {
      //   throw new Error(`Invalid input (extended): ${extended}`);
    }
  };

  const ext = (os: string): string => {
    if (os === 'Windows') {
      return 'zip';
    } else {
      return 'tar.gz';
    }
  };

  const hugoName = `hugo_${extendedStr(extended)}${version}_${os}-64bit`;
  const baseURL = 'https://github.com/illeatmyhat/hugo/releases/download';
  const url = `${baseURL}/v${version}/${hugoName}.${ext(os)}`;

  return url;
}
