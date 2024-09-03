import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto justify-center py-10">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Example of a project card */}
        <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Hotel Management System</h3>
          <p className="text-gray-600">This project is a comprehensive hotel management system developed using React for the frontend and Node.js for the backend. The application allows hotel administrators to manage bookings, rooms, and customer details efficiently. It provides a user-friendly interface for both staff and guests, ensuring smooth operations and an enhanced user experience. The system is built to handle real-time updates, providing accurate availability and booking status, and it includes secure authentication for staff and administrators. With its responsive design and scalable architecture, this project is a robust solution for modern hotel management needs.</p>
        </div>
        {/* Add more project cards as needed */}
        <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Coffee Order Website</h3>
          <p className="text-gray-600">This project is a dynamic foodchain and drinks website developed for a Saudi client using React and Redux. The application features a seamless and interactive user interface that allows customers to explore various food and drink options, place orders, and manage their preferences. With the power of Redux, the website ensures efficient state management, providing a smooth and consistent user experience across the platform. The project emphasizes responsiveness, making it accessible on multiple devices, and is designed to handle high traffic volumes while maintaining optimal performance. This website is tailored to meet the specific needs of the client's business, offering a robust solution for their online presence.</p>
          <a href='https://hjeen-food-website-7vb1.vercel.app/' className="text-gray-600">https://hjeen-food-website-7vb1.vercel.app/</a>
        </div>

        <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Local Restaurant Aggregator Website

</h3>
          <p className="text-gray-600">This project is a local restaurant aggregator website developed for a client using React, Node.js, Express, and MongoDB. The platform connects various local restaurants, enabling users to browse menus and place orders from any of the partnered establishments. The website provides a seamless experience for customers to explore diverse dining options and have their orders delivered directly to their homes. The backend architecture, powered by Node.js and Express, ensures efficient order processing and real-time updates, while MongoDB manages the data of restaurants, menus, and customer orders. This project is designed to expand the client's business by facilitating partnerships with multiple restaurants, offering a comprehensive online food ordering solution.</p>
          <a href='https://desi-dhaba.vercel.app/?category=all' className="text-gray-600">https://desi-dhaba.vercel.app/?category=all</a>
        </div>

        <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Digital Agency Website</h3>
          <p className="text-gray-600">This project is a sophisticated digital agency website built with Django for the backend and Angular for the frontend. The application serves as a powerful platform for showcasing the agency's services, portfolio, and client testimonials. It features a dynamic and responsive interface that provides a seamless user experience. The backend, powered by Django, manages complex data interactions and secure user authentication, while the Angular frontend ensures a fast and interactive client-side experience. The project integrates various third-party APIs to enhance functionality, such as analytics, social media feeds, and payment gateways. This website is designed to be scalable and maintainable, making it a robust solution for a modern digital agency's online presence.</p>
          <a href='https://flikrinnovation.com/' className="text-gray-600">https://flikrinnovation.com/</a>
        </div>
        <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">ERP Solutions Website</h3>
          <p className="text-gray-600">This project is an ERP (Enterprise Resource Planning) solutions website developed for a local client using React for the frontend and Node.js for the backend. The website features a modern and visually appealing UI/UX design that provides an intuitive user experience. It allows businesses to manage and integrate their core processes, including finance, HR, supply chain, and customer relations, in one centralized platform. The responsive design ensures accessibility across various devices, while the backend, powered by Node.js, ensures secure and efficient data management. This project is tailored to streamline business operations and enhance productivity, offering a comprehensive ERP solution that meets the client's needs.</p>
          <a href='        https://ecube1.netlify.app/
' className="text-gray-600">        https://ecube1.netlify.app/
</a>

        </div>

        <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Food delivery App (Backend Developer)</h3>
          <p className="text-gray-600">Successfully integrated applications with various third-party services, including Dynamics 365 ERP for streamlined enterprise resource planning, Twilio for robust communication solutions, and Checkout for seamless payment processing.
          Worked on developing a real-time dashboard for the warehouse team using Firebase, enabling efficient monitoring and management of inventory and operations. Leveraged Elasticsearch to enhance search functionalities and indexed data to significantly optimize the response time for listing queries.Successfully integrated applications with various third-party services, including Dynamics 365 ERP for streamlined enterprise resource planning, Twilio for robust communication solutions, and Checkout for seamless payment processing. Worked on developing a real-time dashboard for the warehouse team using Firebase, enabling efficient monitoring and management of inventory and operations. Leveraged Elasticsearch to enhance search functionalities and indexed data to significantly optimize the response time for listing queries.</p>
        </div>


      </div>
    </div>
  );
};

export default Projects;
