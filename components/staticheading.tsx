
function Heading() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px",
        backgroundColor: "#f4f4f4",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginTop: "150px",
      }}
    >
      <h1
        style={{
          color: "blue",
          fontSize: "24px",
          fontWeight: "bolder",
          textAlign: "center",
          textDecoration: "underline",
          padding: "20px",
          margin: "15px",
        }}
      >
        Static Component Rendering
      </h1>

      <h3 style={{color: "green",
      fontSize: "18px",
      fontWeight: "bold",
      textAlign: "justify",
      lineHeight: "1.6",
      }}>A static component in web development, particularly in frameworks like React or Next.js, is a component that renders content that does not change over time.
       </h3>
     
       <br />

        <h4   style={{
        color: "green",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: "1.6",
       
      }}>
        Here are some key characteristics of static components:
      </h4>

      <br />

      <ol
        style={{
          paddingLeft: "20px",
          listStyle: "outside",
          color: "darkmagenta",
          fontSize: "18px",
          fontWeight: "bolder",
          lineHeight: "1.5",
         
        }}
      >
         <li style={{ marginBottom: "15px" }}>
         <strong>Unchanging Content: </strong> The data displayed by static components remains constant and does not change in response to user interactions, state changes, or props. For example, a header or footer with contact information or a company slogan can be considered static.
        </li>
         <li style={{ marginBottom: "15px" }}>
         <strong>Performance:</strong>  Since static components do not need to re-render or update based on user interactions, they are often more efficient and can lead to better performance for the application.
        </li>
         <li style={{ marginBottom: "15px" }}>
         <strong>Use Cases:</strong>  Static components are commonly used for content that does not need to be dynamic, such as headers and footers, company logos, legal disclaimers, or instructions or information that remains constant.
        </li>
      </ol>
    </div>
  );
}

export default Heading;
