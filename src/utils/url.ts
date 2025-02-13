/**
 * 加密
 * @param text
 * @returns
 */
export function encrypt(text: string | Record<string, any>) {
  const _text = typeof text === 'object' ? JSON.stringify(text) : text;

  return btoa(encodeURIComponent(_text));
}

/**
 * 解密
 * @param text
 * @returns
 */
export function decrypt(text: string, isJson: boolean = false) {
  try {
    const result = decodeURIComponent(atob(text));

    if (isJson) {
      return JSON.parse(result);
    }

    return result;
  } catch (error) {
    console.error(error);
    const result = decodeURIComponent(atob(text));

    return result;
  }
}
