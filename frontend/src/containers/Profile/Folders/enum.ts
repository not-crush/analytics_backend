export enum fetchingTypes{
    GET_FOLDERS = 'GET_FOLDERS',
    ADD_TO_FOLDER = 'ADD_TO_FOLDER',
    REMOVE_FROM_FOLDER = 'REMOVE_FROM_FOLDER',
    CREATE_FOLDER = 'CREATE_FOLDER',
    DELETE_FOLDER = 'DELETE_FOLDER',
}

export enum fields{
    FOLDERS = 'FOLDERS',
    ADD_FOLDER_DIALOG = 'ADD_FOLDER_DIALOG',
    ADD_TO_FOLDER_DIALOG = 'ADD_TO_FOLDER_DIALOG',
    IS_OPEN_DIALOG = 'IS_OPEN_DIALOG',
    DIALOG_DATA = 'DIALOG_DATA',
}

export enum FoldersFields{
    ID = 'id',
    NAME = 'name',
    DESCRIPTION = 'description',
    WORK_PROGRAM_IN_FOLDER = 'work_program_in_folder',
    ACADEMIC_PLAN_IN_FOLDER = 'academic_plan_in_folder',
    WORK_PROGRAM = 'work_program',
    ACADEMIC_PLAN = 'academic_plan',
    WORK_PROGRAM_RATING = 'work_program_rating',
    ACADEMIC_PLAN_RATING = 'academic_plan_rating',
    COMMENT = 'comment',
}

export enum FavoriteType{
    WORK_PROGRAM = 'WORK_PROGRAM',
    ACADEMIC_PLAN = 'ACADEMIC_PLAN'
}