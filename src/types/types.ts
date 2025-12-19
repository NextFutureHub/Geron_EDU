interface ParamsModel {
  width: number;
  height: number;
  weight: number;
}

interface DetailModel {
  title: string;
  params: ParamsModel;
}

interface ProjectModel {
  name: string;
  details: DetailModel[];
  mainEngineer: string;
  deadline: string;
}

interface Deportaments {
  tech: ProjectModel[];
  turbo: ProjectModel[];
  chemical: ProjectModel[];
}
