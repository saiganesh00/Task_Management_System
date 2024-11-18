import React from "react";

const TaskPriorityFilters = ({ setPriorityFilter, priorityFilter, tasks }) => {
  const priorityCounts = {
    all: tasks.length,
    high: tasks.filter((task) => task.priority === "High").length,
    medium: tasks.filter((task) => task.priority === "Medium").length,
    low: tasks.filter((task) => task.priority === "Low").length,
  };

  return (
    <div className="row justify-content-center m-4">
      <div className="col-lg-8">
        <div className="btn-group w-100" role="group">
          {/* All priority filter */}
          <input
            type="radio"
            className="btn-check"
            name="priorityFilter"
            id="priority-all"
            value="all"
            onChange={(e) => setPriorityFilter(e.target.value)} // Trigger setPriorityFilter
            checked={priorityFilter === "all"} // Checked if the priority filter matches
          />
          <label className="btn btn-outline-secondary" htmlFor="priority-all">
            All (<span>{priorityCounts.all}</span>)
          </label>

          {/* High priority filter */}
          <input
            type="radio"
            className="btn-check"
            name="priorityFilter"
            id="priority-high"
            value="High"
            onChange={(e) => setPriorityFilter(e.target.value)} // Trigger setPriorityFilter
            checked={priorityFilter === "High"} // Checked if the priority filter matches
          />
          <label className="btn btn-outline-secondary" htmlFor="priority-high">
            High (<span>{priorityCounts.high}</span>)
          </label>

          {/* Medium priority filter */}
          <input
            type="radio"
            className="btn-check"
            name="priorityFilter"
            id="priority-medium"
            value="Medium"
            onChange={(e) => setPriorityFilter(e.target.value)} // Trigger setPriorityFilter
            checked={priorityFilter === "Medium"} // Checked if the priority filter matches
          />
          <label className="btn btn-outline-secondary" htmlFor="priority-medium">
            Medium (<span>{priorityCounts.medium}</span>)
          </label>
        
          {/* Low priority filter */}
          <input
            type="radio"
            className="btn-check"
            name="priorityFilter"
            id="priority-low"
            value="Low"
            onChange={(e) => setPriorityFilter(e.target.value)} // Trigger setPriorityFilter
            checked={priorityFilter === "Low"} // Checked if the priority filter matches
          />
          <label className="btn btn-outline-secondary" htmlFor="priority-low">
            Low (<span>{priorityCounts.low}</span>)
          </label>
        </div>
      </div>
    </div>
  );
};

export default TaskPriorityFilters;
