"use client";

import { useEffect, useState } from "react";

const roles = [
  "Sitios web profesionales.",
  "Apps web a medida.",
  "Módulos personalizados.",
  "Sistemas internos.",
  "Automatizaciones.",
  "E-commerce",
  "IA aplicada.",
  "Ciberseguridad."
];

export function TypeWriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [value, setValue] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const done = value === role;
    const empty = value.length === 0;
    const delay = done && !deleting ? 1200 : deleting ? 45 : 75;

    const timeout = window.setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
        return;
      }

      if (deleting && empty) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }

      setValue(role.slice(0, value.length + (deleting ? -1 : 1)));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, roleIndex, value]);

  return (
    <div className="mt-3 min-h-9 text-2xl font-medium text-navy">
      {value}
      <span className="ml-1 inline-block h-7 w-0.5 translate-y-1 bg-teal [animation:blink_760ms_steps(1)_infinite]" />
    </div>
  );
}
