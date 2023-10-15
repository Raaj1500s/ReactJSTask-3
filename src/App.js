import Colorpick from './components/Colorpick';
import './App.css';

const Apps = () => {
  const colors = ["red", "green", "blue", "yellow", "purple","orange","violet","black","pink","skyblue","lightgreen","darkviolet","lightyellow","gray"];

  return (
    <div className="App">
      <Colorpick colors={colors} />
    </div>
  );
};

export default Apps;
/* 
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Raaj1500s/ReactJSTask-3.git
git push -u origin main
*/