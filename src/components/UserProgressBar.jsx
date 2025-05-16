import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from 'react';

function UserProgressBar() {

  useEffect(() => {
    const progressBar = document.querySelector('.progress');
    // add a class to the progress bar
    if (progressBar) {
      progressBar.classList.add('progress-indigo');
    }
  }, []);


  const now = 45; // Example progress value
  return <ProgressBar  animated now={45} label={`${now}%`} min={0} max={100} />;
}

export default UserProgressBar;