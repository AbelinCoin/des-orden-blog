import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <>
          <h3 className="text-3xl mb-8 text-secondthegray border-b pb-4">
            {/* {comments.length} */}
            {' '}
            {comments.length > 1 ? 'Comentarios mas recientes:' : 'Comentarios mas recientes:'}
          </h3>
          <div className="bg-white border border-gray-300 rounded-lg p-8 pb-12 mb-8">
            {comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4 flex flex-col">
                  <span className="text-secondthegray font-bold">{comment.name}</span>
                  <span className="text-secondthegray">{moment(comment.createdAt).format('MMM DD, YYYY')}</span>
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Comments;
