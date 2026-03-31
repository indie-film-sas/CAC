export function LoginSecurityFields({ csrfToken }: { csrfToken: string }) {
  return (
    <>
      <input type="hidden" name="csrfToken" value={csrfToken} readOnly />
      <input type="hidden" name="startedAt" value={Date.now()} readOnly />
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
    </>
  )
}
