"use client";

import { BookOpen } from "lucide-react";
import { useState } from "react";

type CoursesKeyGridProps = {
  courses: string[];
};

export function CoursesKeyGrid({ courses }: CoursesKeyGridProps) {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  return (
    <div className="course-box mx-auto mt-10 max-w-5xl rounded-2xl border border-line bg-[#F7F4EE] p-8">
      <BookOpen className="course-box-icon mx-auto text-teal" size={42} />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {courses.map((course, index) => {
          const selected = selectedCourse === course;

          return (
            <button
              key={course}
              className={`course-chip group relative flex min-h-[58px] items-center gap-3 overflow-hidden rounded-xl border border-line bg-[#F3EDE4] p-4 text-left text-sm font-semibold text-navy outline-none transition duration-300 ${
                selected ? "is-selected border-orange shadow-[0_16px_38px_rgba(255,90,31,0.22)]" : "hover:border-orange/55"
              }`}
              style={{ animationDelay: `${index * 90}ms` }}
              type="button"
              onClick={() => setSelectedCourse((current) => (current === course ? null : course))}
            >
              <span className="relative z-10 h-2 w-2 shrink-0 rounded-full bg-orange transition duration-300 group-hover:scale-125" />
              <span className="relative z-10">{course}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
