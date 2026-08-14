const GOOGLE_APPS_SCRIPT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbz8C4kyQ-p6D3yiUObszYKPdRVgfwe51KX85n1uq5ILuC8mMceZxizdvTffUb12J2Ct/exec";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid inquiry data." }, { status: 400 });
  }

  try {
    const scriptResponse = await fetch(GOOGLE_APPS_SCRIPT_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    const result = (await scriptResponse.json().catch(() => null)) as { error?: string; ok?: boolean } | null;

    if (!scriptResponse.ok || !result?.ok) {
      return Response.json(
        { error: result?.error || "The quotation request could not be saved." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Unable to reach the lead tracker." }, { status: 502 });
  }
}
