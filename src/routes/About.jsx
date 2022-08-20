import { useEffect } from "react";
const About = ({ title }) => {
  useEffect(() => {
    document.title = title + " - PokeAPI React + Tailwind";
  }, []);

  return (
    <div>
      <a
        className="mb-4 py-2 px-3 block bg-blue-200 text-blue-600 border border-blue-600 font-semibold rounded"
        href="https://github.com/snabila/demo-react-poke"
      >
        View this project on Github
      </a>

      <p className="mb-4">
        This demo project is a simple demonstration of API connected web
        application using React Framework.
      </p>

      <p>This application uses:</p>
      <ul className="mb-8 ml-2 list-inside list-disc">
        <li>Poke API</li>
        <li>
          Route and component load transition using react-transition-group
        </li>
      </ul>
    </div>
  );
};

export default About;
