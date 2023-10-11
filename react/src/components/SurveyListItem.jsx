import { ArrowTopRightOnSquareIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import Tbutton from './core/Tbutton'


export default function SurveyListItem({ survey, onDeleteClick }) {
  console.log(survey)
  return (
    <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-h-[470px]">
      <img
        src={survey.image_url}
        alt={survey.title}
        className="w-full h-48 object-cover"
      />
      <h4 className="mt4 text-lg font-bold">{survey.title}</h4>
      <div
        dangerouslySetInnerHTML={{ __html: survey.description }}
        className="overflow-hidden flex-1"
      ></div>

      <div className="flex justify-between items-center mt-3">
        <Tbutton to={`surveys/${survey.id}`}>
          <PencilIcon className="w-5 h-5 mr-2" />
          Edit
        </Tbutton>
        <div className="flex items-center">
          <Tbutton to={`surveys/${survey.id}`} circle link>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </Tbutton>

          {survey.id &&(
            <Tbutton onClick={onDeleteClick} circle link color="red">
              <TrashIcon className="w-5 h-5" />
            </Tbutton>
          )}
        </div>
      </div>
    </div>
  )
}
