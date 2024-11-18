import React, { useState, useEffect } from "react";
import Axios from "axios";  // Import Axios
import TaskForm from "./TaskForm";
import TaskFilters from "./TaskFilter";
import TaskList from "./TaskList";
import TaskPriorityFilters from "./TaskPriorityFilters";  // Import the priority filter component
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const navigate = useNavigate();
  // Fetch tasks from the API using Axios
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');  // Retrieve the token from localStorage
      if (!token) {
        // Redirect to login if no token is found
        navigate('/');
        return;
      }
      const response = await Axios.get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          'Authorization': `Token ${token}`,  // Add token to Authorization header
        }
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  // Call fetchTasks on component mount
  useEffect(() => {
    fetchTasks();
  });

  // Add a new task
  const addTask = async (task) => {
    try {
      console.log("Sending Task Data:", task); // Log task data before sending
      const response = await Axios.post("http://127.0.0.1:8000/api/tasks/create", task, {
        headers: {
          'Content-Type': 'application/json', // Explicitly set content type
        },
      });
      setTasks([...tasks, response.data]); // Add the new task to the list
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };
  
  // Update task status (in-progress or completed)
  const updateTaskStatus = async (taskId, updatedTask) => {
    try {
      const response = await Axios.put(`http://127.0.0.1:8000/api/tasks/edit/${taskId}`, updatedTask);
      fetchTasks();
      console.log('Task updated successfully', response.data);
    } catch (error) {
      console.error('Error updating task:', error.response ? error.response.data : error.message);
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      await Axios.delete(`http://127.0.0.1:8000/api/tasks/delete/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));  // Remove task from the list
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Example: Clear token from localStorage
    window.location.href = "/";  // Redirect to the login page
  };

  // Filter tasks based on the selected status filter and priority filter
  const filteredTasks = tasks.filter((task) => {
    // Apply status filter
    const statusMatch = filter === "all" || task.status === filter;
    // Apply priority filter
    const priorityMatch = priorityFilter === "all" || task.priority === priorityFilter;
    return statusMatch && priorityMatch;  // Return tasks that match both filters
  });

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <i className="bi bi-clipboard-check display-4 text-primary"></i>
        <h1 className="display-5 fw-bold">Task Manager</h1>
        <button 
          className="btn btn-danger float-end"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Task Form to Add New Task */}
      <TaskForm addTask={addTask} />

      {/* Task Filters to Show Different Task Statuses */}
      <TaskFilters setFilter={setFilter} filter={filter} tasks={tasks} />

      {/* Task Priority Filters */}
      <TaskPriorityFilters 
        setPriorityFilter={setPriorityFilter} 
        priorityFilter={priorityFilter} 
        tasks={tasks} 
      />

      {/* Task List to Display Filtered Tasks */}
      <TaskList 
        tasks={filteredTasks} 
        updateTaskStatus={updateTaskStatus} 
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default Dashboard;
