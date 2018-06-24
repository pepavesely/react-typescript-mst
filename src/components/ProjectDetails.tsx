import * as React from "react";
import { IProject } from "../stores/ProjectStore";
import { observer } from "mobx-react";

export interface IProjectListProps {
    project: IProject
    onDeletion(id: number): void;
}

export interface IProjectListState {
    editMode: boolean;
}

@observer
class ProjectDetails extends React.Component<IProjectListProps, IProjectListState> {
    
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.getProjectForm = this.getProjectForm.bind(this);
    }

    toggleEditMode(): void {
        this.setState({editMode: !this.state.editMode });
    }

    getProjectForm(project: IProject): JSX.Element {
        if (this.state.editMode) {
            return (
                <div>
                    <label>Project Name: <input type="text" value={project.name} onChange={(e) => project.changeName(e.target.value)} /></label>
                    <label>Project Status: <input type="checkbox" checked={project.isActive} onChange={(e) => project.toggleActive()} /></label>
                </div>
            );
        }

        return (
            <span>{project.name} - {project.isActive ? "active" : "inactive"}</span>
        );
    }

    render(): JSX.Element {
        const { project } = this.props;
        return (
            <li>
                {this.getProjectForm(project)}
                <button type="button" onClick={this.toggleEditMode}>toggleEdit</button>
                <button type="button" onClick={(e) => this.props.onDeletion(project.id)}>delete</button>
            </li>
        );
    }
}

export default ProjectDetails;