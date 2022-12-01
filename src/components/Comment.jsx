import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'



export function Comment(){
    return(
     <div className={styles.Comment}>
           <img src="https://github.com/erikpolsci.png"/> 

         <div className={styles.CommentBox}>
            <div className={styles.CommentContent}>
                <header>
                <div className={styles.authorAndTime}>
                    <strong>Erik Sales</strong>
                    <time title="november 30 12:07pm"dateTime="2022-11-30 12:06:30">1 hour ago</time>

                </div>

                <button title='excluir comentario'>
                    <Trash size={20}/>
                </button>
                </header>
                <p>
                    Thats nice!
                </p>
            </div>

            <footer>
              <button>
                <ThumbsUp size={20}/>
                Aplaudir <span>20</span>
              </button>
            </footer>
         </div>
     </div>
    )
}