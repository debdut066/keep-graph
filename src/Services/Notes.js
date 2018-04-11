import gql from "graphql-tag";

const queries = {
    allNotes: gql`
          query allNotes ($orderBy: NoteOrderBy) {
            allNotes (orderBy: $orderBy) {
              id
              title
              content
              color
              updatedAt
            }
          }
        `
};

const mutations = {
    createNote: gql`
          mutation createNote($title: String, $content: String, $userId: ID) {
            createNote(title: $title, content: $content, userId: $userId ) {
              id
              title
              content
              color
              updatedAt
            }
          }
        `,
    deleteNote: gql`
          mutation deleteNote($id: ID!) {
            deleteNote(id: $id) {
              id
            }
          }
        `,
    updateNote: gql`
          mutation updateNote($id: ID!, $title: String , $content: String) {
            updateNote( id: $id, title: $title, content: $content ) {
              id
              title
              content
              color
              updatedAt
            }
          }
        `,
    updateNoteColor: gql`
          mutation updateNote($id: ID!, $color: String) {
            updateNote( id: $id, color: $color) {
              id
              title
              content
              color
              updatedAt
            }
          }
        `
};

const subscriptions = {
    Note: gql`
          subscription {
            Note (
                filter: {
                  mutation_in: [CREATED,DELETED,UPDATED],
                }
            ){
                mutation
                node {
                  id
                  title
                  content
                  color
                  updatedAt
                }
             }
          }
        `
};

const NotesService = {
    queries: queries,
    mutations: mutations,
    subscriptions: subscriptions
};

export default NotesService