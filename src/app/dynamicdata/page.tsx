
import DynamicHeading from "../../../components/dynamicheading";

function DynamicData() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px",
        backgroundColor: "#f4f4f4",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        
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
          margin: "10px",
        }}
      >
        Dynamic Component Rendering
      </h1>

      <DynamicHeading style={{color: "green",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "justify",
          lineHeight: "1.6",
          }}
        text="A dynamic component in web development, particularly in frameworks like React or Next.js, is a component that can change its content or behavior based on various factors such as user input, state changes, or external data (such as fetching from an API)."
      />
      <br/>
      
      <h4
        style={{
          color: "green",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: "1.6",
         
        }}
      >
        Key Characteristics of Dynamic Components:
        

      </h4>
      <br/>
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
          <strong>Changing Content:</strong> Dynamic components update based on data or events. For example, a component displaying a user's profile will update as the user's data changes.
        </li>

        <li style={{ marginBottom: "15px" }}>
         <strong>State & Props: </strong>  They often rely on state or props to manage and update the content. The component may render differently depending on the values passed as props or based on internal state changes.
        </li>

        <li style={{ marginBottom: "15px" }}>
         <strong>Reactivity:</strong>  They re-render automatically when the data they depend on changes, ensuring that the user sees the most up-to-date information without needing a full page reload.
        </li>
        <li style={{ marginBottom: "15px" }}>
         <strong>User Interaction:</strong>  Dynamic components typically respond to user interactions (e.g., clicking a button, submitting a form) and update themselves accordingly.
        </li>
        <li style={{ marginBottom: "15px" }}>
        <strong> Fetching Data:</strong>  Fetching Data: Many dynamic components fetch data from external APIs and then render that data. For example, a component might show a list of posts fetched from a database and update as new posts are added.
        </li>
      </ol>
    </div>
  );
}

export default DynamicData;
