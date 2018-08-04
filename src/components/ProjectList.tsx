import * as React from "react";
import { observer, inject } from "mobx-react";

import { IProjectStore, Project, IProject } from "../stores/ProjectStore";
import ProjectDetails from "./ProjectDetails";

export interface IProjectListProps {
    projectStore?: IProjectStore
}

@inject("projectStore")
@observer
class ProjectList extends React.Component<IProjectListProps> {
    private newProject: IProject;

    constructor(props) {
        super(props);

        this.newProject = Project.create({
            id: -1,
            name: ""
        });

        this.deleteProject = this.deleteProject.bind(this);
        this.addProject = this.addProject.bind(this);
    }

    addProject(newProject: IProject): void {
        let projectStore: IProjectStore = this.props.projectStore;
        projectStore.addProject(newProject);
    }

    deleteProject(id: number): void {
        let projectStore: IProjectStore = this.props.projectStore;
        projectStore.deleteProject(id);
    }

    render() {
        let projectStore: IProjectStore = this.props.projectStore;
        return (
            <div>
                <ul>
                    {projectStore.projects.map((project) => (<ProjectDetails key={project.id} project={project} onDeletion={this.deleteProject}></ProjectDetails>))}
                </ul>
                <div>
                    <label>Project Name: <input name="newProjectNameInput" type="text" value={this.newProject.name} onChange={(e) => this.newProject.changeName(e.target.value)} /></label>
                    <label>Project Status: <input name="newProjectStatusInput" type="checkbox" checked={this.newProject.isActive} onChange={(e) => this.newProject.toggleActive()} /></label>
                </div>
                <button name="addProjectButton" type="button" onClick={(e) => this.addProject(this.newProject)}>add project</button>
            </div>
        );
    }
}

export default ProjectList;