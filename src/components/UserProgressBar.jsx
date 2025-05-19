import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from 'react';

function UserProgressBar({min, max, now}) {

  useEffect(() => {
    const progressBar = document.querySelector('.progress');
    // add a class to the progress bar
    if (progressBar) {
      progressBar.classList.add('progress-indigo');
    }
  }, []);


  return <ProgressBar now={now} label={`${now}%`} min={min} max={max} />;
}

export default UserProgressBar;