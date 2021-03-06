import {ReactText} from "react";

const FOLDERS = 'folders';
const SIGN_IN = 'sign-in';
const SIGN_UP = 'sign-up';
const COURSES = 'courses';
const LITERATURE = 'literature';
const SUBJECT_AREA = 'subject-area';
const WORK_PROGRAM = 'work-program';
const TRAINING_ENTITIES = 'training-entities';
const ENTITY_TO_ENTITY = 'entity-to-entity';
const COMPETENCES = 'competences';
const DIRECTION = 'direction';
const EDUCATIONAL_PLAN = 'educational-plans';
const INDICATORS = 'indicators';
const EDUCATIONAL_PLAN_IN_DIRECTION = 'educational-plans-in-direction';
const EDUCATIONAL_PROGRAM = 'educational-program';
const WORK_PROGRAM_LIST = 'work-programs';
const PROFESSIONS = 'professions';
const ROLES = 'roles';
const SKILLS = 'skills';
const EXPERTISES = 'expertises';

const SEPARATOR = '/';

export default class RouterService {

    static routerService : RouterService | null = null;

    static factory(): RouterService {
        let routerServiceInstance = this.routerService;

        if (routerServiceInstance === null) {
            routerServiceInstance = new RouterService();
        }

        return routerServiceInstance;
    }

    getSignInRoute = () => {
        return SEPARATOR + SIGN_IN;
    };

    getFoldersRoute = () => {
        return SEPARATOR + FOLDERS;
    };

    getSignUpRoute = () => {
        return SEPARATOR + SIGN_UP;
    };

    getCoursesRoute = () => {
        return SEPARATOR + COURSES;
    };

    getLiteratureRoute = () => {
        return SEPARATOR + LITERATURE;
    };

    getSubjectAreaRoute = () => {
        return SEPARATOR + SUBJECT_AREA;
    };

    getTrainingEntitiesRoute = () => {
        return SEPARATOR + TRAINING_ENTITIES;
    };

    getEntityToEntityRoute = () => {
        return SEPARATOR + ENTITY_TO_ENTITY;
    };

    getCompetencesRoute = () => {
        return SEPARATOR + COMPETENCES;
    };

    getDirectionRoute = () => {
        return SEPARATOR + DIRECTION;
    };

    getIndicatorsRoute = () => {
        return SEPARATOR + INDICATORS;
    };

    getEducationalProgram = () => {
        return SEPARATOR + EDUCATIONAL_PROGRAM;
    };

    getEducationalProgramCharacteristic = () => {
        return SEPARATOR + EDUCATIONAL_PROGRAM + SEPARATOR + ':id';
    };

    getEducationalProgramCharacteristicLink = (id: number) => {
        return SEPARATOR + EDUCATIONAL_PROGRAM + SEPARATOR + id;
    };

    getEducationPlanInDirectionRoute = () => {
        return SEPARATOR + EDUCATIONAL_PLAN_IN_DIRECTION;
    };

    getProfessionsRoute = () => {
        return SEPARATOR + PROFESSIONS;
    };

    getRolesRoute = () => {
        return SEPARATOR + ROLES;
    };

    getSkillsProfessionsRoute = () => {
        return SEPARATOR + 'skills-professions';
    };

    getSelectDisciplineRoute = () => {
        return SEPARATOR + 'select-discipline';
    };

    getSkillsRolesRoute = () => {
        return SEPARATOR + 'skills-roles';
    };

    getRolesSkillsRoute = () => {
        return SEPARATOR + ROLES + SEPARATOR + ':id' + SEPARATOR + SKILLS;
    };
    getProfessionSkillsRoute = () => {
        return SEPARATOR + PROFESSIONS + SEPARATOR + ':id' + SEPARATOR + SKILLS;
    };

    getProfessionSkillsRouteLink = (id: number) => {
        return SEPARATOR + PROFESSIONS + SEPARATOR + id + SEPARATOR + SKILLS;
    };

    getRoleSkillsRouteLink = (id: number) => {
        return SEPARATOR + ROLES + SEPARATOR + id + SEPARATOR + SKILLS;
    };

    getWorkProgramListRoute = () => {
        return SEPARATOR + WORK_PROGRAM_LIST;
    };

    getEducationPlanRoute = () => {
        return SEPARATOR + EDUCATIONAL_PLAN;
    };

    getExpertisesRoute = () => {
        return SEPARATOR + EXPERTISES;
    };

    getExpertiseRoute = () => {
        return SEPARATOR + EXPERTISES + SEPARATOR + ':id';
    };

    getForbiddenPage = () => {
        return SEPARATOR + 403;
    };

    getExpertiseRouteLink = (id: number) => {
        return SEPARATOR + EXPERTISES + SEPARATOR + id;
    };

    getWorkProgramRoute = () => {
        return SEPARATOR + WORK_PROGRAM + SEPARATOR + ':id';
    };

    getEducationPlanDetailRoute = () => {
        return SEPARATOR + EDUCATIONAL_PLAN + SEPARATOR + ':id';
    };

    getWorkProgramLink = (id: number) => {
        return SEPARATOR + WORK_PROGRAM + SEPARATOR + id;
    };

    getPlanDetailLink = (id: ReactText) => {
        return SEPARATOR + EDUCATIONAL_PLAN + SEPARATOR + id;
    };
}

export const appRouter = RouterService.factory();