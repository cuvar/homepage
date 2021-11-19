export function getCookie(allCookies: string, cname: string): string {
  let name: string = cname + '=';
  let decodedCookie: string = decodeURIComponent(allCookies);
  let ca: string[] = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c: string = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function setCookie(cname: string, cvalue: string, exhours: number) {
  const d: any = new Date();
  d.setTime(d.getTime() + exhours * 60 * 60 * 1000);
  let expires: string = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export function deleteCookie(key: string) {
  document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
