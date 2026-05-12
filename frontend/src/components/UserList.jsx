import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);



  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F3EB] font-['Montserrat'] py-10 px-4">
      <div className="text-center absolute top-6 right-4">
          <Link to="/" className="text-[#474544] font-medium border-2 border-[#474544] px-6 py-3 rounded hover:bg-amber-100 cursor-pointer transition-all duration-300 ease-in-out ">
            Back to Form
          </Link>
        </div>
      <div className="max-w-4xl mx-auto border-[3px] border-[#474544] bg-white overflow-hidden">
        
        
        <div className="pt-12 pb-8 text-center border-b border-[#474544]">
          <h1 className="text-[#474544] text-4xl md:text-[32px] font-bold tracking-[7px] uppercase">
            All Users
          </h1>
          <div className="underline mx-auto mt-4 w-20 border-b-2 border-[#474544]"></div>
          <p className="mt-4 text-[#474544] tracking-wider">
            {users.length} {users.length === 1 ? "Submission" : "Submissions"}
          </p>
        </div>

        
        <div className="divide-y divide-[#474544]">
          {users.length === 0 ? (
            <div className="p-20 text-center">
              <p className="text-[#474544] text-xl tracking-wider">No submissions yet</p>
            </div>
          ) : (
            users.map((user) => (
              <div
                key={user.id}
                className="p-8 md:p-10 hover:bg-[#F9FAF4] transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  
                  <div className="md:col-span-2 space-y-4">
                    <p className="uppercase text-xs tracking-widest text-[#474544] mb-1">Name</p>
                    <p className=" text-[#474544]">{user.name}</p>
                  </div>

                  
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <p className="uppercase text-xs tracking-widest text-[#474544] mb-1">Email</p>
                      <p className="text-[#474544]">{user.email}</p>
                    </div>
                    
                  </div>

                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <p className="uppercase text-xs tracking-widest text-[#474544] mb-1">Phone</p>
                      <p className="text-[#474544]">{user.phone_number}</p>
                    </div>
                  </div>

                
                  <div className="md:col-span-4 space-y-4">
                    <p className="uppercase text-xs tracking-widest text-[#474544] mb-1">Message</p>
                    <p className="text-[#474544] leading-relaxed">
                      {user.message}
                    </p>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        
        
      </div>
    </div>
  );
}

export default UserList;