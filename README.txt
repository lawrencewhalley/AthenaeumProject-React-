Getting the API Working
- visual studio was used in the setup and use the .net web api template
- the api was published to newly created empty folder
- the api was configured in IIS with the above folder as the path and the PORT SET ON 8082
- dotnet hosting web bundle runtime was downloaded and installed


--npm install fs
--npm install filestack-react
--npm install -- save multer


function CurrentState() {
    const [Status, setStatus] = useState("Selecting");

    const Uploading = () => {
        setStatus(previousState => {
            return { ...previousState, Status: "Uploading" };
        });
    }

    const ReturnMessage = (string) => {
        setStatus(previousState => {
            return { ...previousState, Status: string }
        });
    }

    return <h1>Current Status: {Status}</h1>
}