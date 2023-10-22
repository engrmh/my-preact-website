import { Button, Col, Table } from "react-bootstrap";
import { useEffect, useState } from "preact/hooks";

export default function ProjectSection() {
  const [allProject, setAllProject] = useState([]);

  useEffect(() => {
    fetch("https://apptest.bashiridev.ir/api/Projects/GetProjects")
      .then((res) => res.json())
      .then((data) => setAllProject(data));
  }, []);
  return (
    <Col xs={12} md={8} lg={8} className="mt-4 mb-4 mb-lg-0">
      <div className={`setShadow bg-white p-3 rounded`}>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <span className="">Active Projects</span>
          {/*<Button className="p-0 customBlue">*/}
          {/*    <AddIcon />*/}
          {/*</Button>*/}
        </div>
        <hr className="pb-2" />
        <div className="">
          <div class="w-100 overflow-x-auto">
            <Table striped hover className=''>
              <thead>
                <tr className="table-danger">
                  <th>#</th>
                  <th>Name</th>
                  <th>Customer</th>
                  <th>Salary</th>
                  <th>Creator</th>
                </tr>
              </thead>
              <tbody>
                {allProject.slice(0, 6).map((project, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{project.name}</td>
                    <td>{project.customer}</td>
                    <td>{project.salary}</td>
                    <td>{project.creator}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Col>
  );
}
