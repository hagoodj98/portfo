import React from "react";
import CarouselControlled from "../../../components/Carousel";
const loginSlides = [
  {
    id: "login-action",
    title: "login() Server Action",
    summary:
      "Validates the form with Zod, verifies credentials, and creates the session. Every failure path returns a plain object so the client can render it.",
    description: `// app/actions/auth.ts
'use server';

export async function login(state: unknown, formData: FormData) {
  try {
    const { employee_id, password, admin_key } =
      await adminAccessValidationSchema.parseAsync({
        employee_id: formData.get('employee_id'),
        password: formData.get('password'),
        admin_key: formData.get('admin_key'),
      });

    const found = await user.login(employee_id);
    if (!found) throw new Error('Invalid employee ID');
    if (found.password !== hashPassword(password) ||
        found.admin_key !== admin_key) {
      throw new Error('Invalid password or admin key');
    }

    const userPermissions = await userPermission.find(found.id);
    await createSession({
      employee_id: found.employeeId,
      role: found.role,
      permissions: userPermissions.map((up) => up.permission.name),
      name: found.name,
    });
    return { name: found.name, login_success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { fields: error.issues.map((i) => ({
        path: i.path.join(''), message: i.message })) };
    }
    if (error instanceof CustomError) {
      return { error: error.message, status: error.statusCode };
    }
    return { error: 'There was an internal error. Try again later', status: 500 };
  }
}`,
  },
  {
    id: "login-form",
    title: "useActionState in AdminAccessForm",
    summary:
      "useActionState wires the Server Action to the modal and returns state, a form action, and a pending flag. useReducer holds the controlled inputs.",
    description: `// app/components/AdminAccessForm.tsx
const [state, formAction, pending] = useActionState(login, undefined);

useEffect(() => {
  if (state && 'login_success' in state && state.login_success) {
    if (userIsAuthenticated.state !== 'authenticated') {
      setUserIsAuthenticated({ name: state.name, state: 'authenticated' });
      onClose();
      router.push(redirectPath || '/');
    }
  }
}, [state, router, redirectPath, onClose]);

<form action={() => {
  const data = new FormData();
  data.append('employee_id', form.employee_id);
  data.append('password', form.password);
  data.append('admin_key', form.admin_key);
  formAction(data);
}}>
  {state?.error && <p>{state.error}</p>}
  {state?.fields?.find((f) => f.path === 'password') && (...)}
  <Button disabled={pending} type="submit">Submit</Button>
</form>`,
  },
  {
    id: "login-session",
    title: "JWT Session Cookie",
    summary:
      "createSession signs the payload with jose and stores it in an httpOnly cookie that lasts two days. The browser never reads the token.",
    description: `// lib/session.ts
export async function createSession(payload) {
  const expiresAt = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const session = await new SignJWT({ ...payload, expiresAt })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(Math.floor(expiresAt.getTime() / 1000))
    .sign(encodedKey);

  (await cookies()).set('session', session, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}

export async function logout() {
  await deleteSession();
  return { logout_success: true };
}`,
  },
  {
    id: "login-proxy",
    title: "Route Protection with proxy.ts",
    summary:
      "The proxy intercepts protected pages, asks /api/auth/permission-check to verify the session cookie, and redirects with a message when access is denied.",
    description: `// proxy.ts
if (pathname.includes('/assign-order') ||
    pathname.includes('/add-resource') ||
    pathname.includes('/order-log')) {
  const response = await fetch(
    \`\${origin}/api/auth/permission-check?path=\${pathname}\`,
    { headers: { cookie: \`session=\${session}\` } },
  );
  if (!response.ok) {
    const { error } = await response.json();
    const redirectUrl = new URL('/', req.url);
    redirectUrl.searchParams.append('msg', encodeURIComponent(error));
    return NextResponse.redirect(redirectUrl);
  }
}

// utils/CheckAuthHelper.ts (used by the route)
// - 401 when the session cookie is missing
// - decrypts the JWT and compares permissions to the required action
// - 'all_access' passes; worker (view-only) role gets 403
// - admins can open the order log`,
  },
];

const LoginFlowSection = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
      <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            Admin Login Flow with useActionState
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
          </div>
          <div>
            <p>
              Admin access is a Server Action driven by React&apos;s
              useActionState. The form posts to login(), which validates the
              credentials with Zod, checks the hashed password and admin key,
              loads the user&apos;s permissions, and sets an httpOnly JWT
              session cookie. The hook returns the action result and a pending
              flag, so the modal shows field errors and disables submit without
              extra fetch or loading state.
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
        <div className="tw-w-full tw-mx-auto">
          <CarouselControlled
            wireframeslides={loginSlides.map((slide) => ({
              id: slide.id,
              custom: (
                <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md">
                  <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-2 tw-text-lg">
                    {slide.title}
                  </h4>
                  <p className="tw-text-[#e0e7ef] tw-text-sm tw-mb-3">
                    {slide.summary}
                  </p>
                  <pre className="tw-bg-[#22315a] tw-rounded-lg tw-p-4 tw-text-xs tw-text-[#7dd3fc] tw-overflow-x-auto tw-font-mono tw-border tw-border-[#334155]/60">
                    <code>{slide.description}</code>
                  </pre>
                </div>
              ),
            }))}
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginFlowSection;
