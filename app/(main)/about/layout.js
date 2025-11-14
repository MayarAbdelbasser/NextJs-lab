import Sidebar from "../../../components/sidebar";
function aboutLayout({ children }) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}

export default aboutLayout;
