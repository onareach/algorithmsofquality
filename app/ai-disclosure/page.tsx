import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Disclosure',
  alternates: {
    canonical: '/ai-disclosure'
  }
};

export default function AIDisclosurePage() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl mb-2 font-medium">AI Disclosure</h1>

      <br />

      <div className="max-w-[75ch] space-y-4 text-gray-800 dark:text-zinc-300 leading-snug">
        <p>
          This site was developed with the assistance of artificial intelligence.
        </p>

        <p>That statement, however, is easily misunderstood if taken at face value.</p>

        <p>
          AI is not simply a tool for generating text. It is, among other things, a powerful
          engine for identifying patterns, relationships, and associations across vast bodies of
          language. In that sense, it excels at{' '}
          <strong style={{ fontWeight: 'bold' }}>qualitative connections</strong>—connections from
          which meaning and value can be derived. For this reason, AI serves as an unusually
          capable partner in the exploration of Quality.
        </p>

        <p>At the same time, there is an important distinction to be made.</p>

        <p>
          Artificial intelligence operates at the level of{' '}
          <strong style={{ fontWeight: 'bold' }}>symbols</strong>—manipulating words, structures,
          and patterns with extraordinary speed and scope. Human beings, by contrast, are capable of
          engaging not only with symbols, but with{' '}
          <strong style={{ fontWeight: 'bold' }}>meaning</strong>
          —and, crucially, with <strong style={{ fontWeight: 'bold' }}>motive</strong>. Humans bring
          direction, intention, and evaluative judgment to the process. They decide what is worth
          pursuing, what counts as improvement, and what constitutes Quality.
        </p>

        <p>
          This distinction clarifies the role of AI within human enterprises. (See{' '}
          <Link
            href="/writings/motives-direction-of-quality"
            className="text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800"
          >
            Motives and the Direction of Quality
          </Link>
          .)
        </p>

        <p>The development of this site reflects a collaboration:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li className="pl-1">
            AI contributes breadth—revealing patterns, analogies, and connections that would otherwise be difficult to discover.
          </li>
          <li className="pl-1">
            Human inquiry contributes direction—guided by motives oriented toward health, usefulness, beauty, and understanding.
          </li>
        </ul>

        <p>
          The ideas presented here emerge from an interaction between motivated human inquiry and human tools of symbolic exploration.
        </p>

        <p>
          If Quality is understood as that which is good, fitting, or elevating, then the role of
          technology in this work is not to replace human judgment, but to extend the range of what we can explore. The responsibility for interpretation, evaluation, and direction remains with the
          human participant.
        </p>

        <p>This site is, in part, an experiment in that interaction.</p>
      </div>
    </>
  );
}
