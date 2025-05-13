import FileUpload from "../components/FileUpload";

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl mb-4">Dashboard</h2>
            <FileUpload />
        </div>
    );
};

export default Dashboard;
