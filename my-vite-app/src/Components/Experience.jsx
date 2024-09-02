import React from 'react';

const Experience = () => {
  return (
    <div className="container mx-auto mt-20 pt-200 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">My Experience</h2>
      <ul className="space-y-5">
        <li className="bg-white p-5 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Xref · Senior Full-Stack Engineer</h3>
          <h3 className="text-s font-semibold text-gray-600">Aug 2023 - Present · 1 yr 1 mo</h3>
          <p className="text-gray-600">Developed multiple features using Angular for the frontend and Django for the backend. Created APIs with Django to support various functionalities and optimized numerous queries to enhance performance. Utilized AWS to write Lambda functions, further improving the application's efficiency.</p>
        </li>
        {/* Add more experiences as needed */}
        <li className="bg-white p-5 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Cheetay · Python Developer</h3>
          <h3 className="text-s font-semibold text-gray-600">Aug 2021 - Aug 2023 · 2 yrs 1 mo</h3>
          <p className="text-gray-600">Successfully integrated applications with various third-party services, including Dynamics 365 ERP for streamlined enterprise resource planning, Twilio for robust communication solutions, and Checkout for seamless payment processing.
          </p>
        </li>

        <li className="bg-white p-5 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">FiveRivers Tech · Python Developer</h3>
          <h3 className="text-s font-semibold text-gray-600">Feb 2019 - Jul 2021 · 2 yr 6 mos</h3>
          <p className="text-gray-600">Worked on developing a real-time dashboard for the warehouse team using Firebase, enabling efficient monitoring and management of inventory and operations. Leveraged Elasticsearch to enhance search functionalities and indexed data to significantly optimize the response time for listing queries.</p>
        </li>

      </ul>
    </div>
  );
};

export default Experience;
