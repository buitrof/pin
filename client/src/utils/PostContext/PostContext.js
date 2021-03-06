import  {createContext} from 'react';

const PostContext = createContext({
  posts: [],
  post: {},
  postOwner: '',
  posterId: '',
  title: '',
  description: '',
  difficulty: '',
  totalTime: '',
  imageLinks: '',
  search: '',
  solutions: [],
  comments: [],
  newSolution: {},
  edit: false,
  addSol: false,
  desc: '',
  gh: '',
  deployed: '',
  newComment: '',
  handleViewAll: () => {},
  handleCreateNewPost: () => {},
  handleInputChange: () => {},
  handleUpdatePost: () => {},
  handleAddToPost: () => {},
  handleRemoveFromPost: () => {},
  handleSearch: () => {},
  handleViewPost: () => {},
  handleGoToPost: () => {},
  handleAddSolution: () => {},
  handleRemSolution: () => {},
  handleToggleSolution: () => {},
  handleToggleEdit: () => {},
  handleEditIdea: () => {},
  handleAddComment: () => {},
  handleRemComment: () => {},
  handleDeleteIdea: () => {}
});

export default PostContext;
