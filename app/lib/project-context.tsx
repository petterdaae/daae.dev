import { createContext, useContext, ReactNode } from "react";

type ProjectContextType = {
  projectId: string | null;
  isDaae: boolean;
};

const ProjectContext = createContext<ProjectContextType | null>(null);

type ProjectProviderProps = {
  children: ReactNode;
  projectId: string | null;
};

export function ProjectProvider({ children, projectId }: ProjectProviderProps) {
  const isDaae = projectId === "9ijxh2qg";
  
  return (
    <ProjectContext.Provider value={{ projectId, isDaae }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}