import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'



export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl} 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
              </div>

              <time title="november 30 12:07pm"dateTime="2022-11-30 12:06:30">Publicado ha 1h</time>
            </header>

            <div className={styles.content}>
                
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                placeholder='Deixe um comentario'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />

            </div>

        </article>
        )
}