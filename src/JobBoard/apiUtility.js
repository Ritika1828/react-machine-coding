export async function apiUtility({ url, payload }) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
