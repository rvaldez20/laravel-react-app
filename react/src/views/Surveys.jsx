import { PlusCircleIcon } from '@heroicons/react/24/outline';
import PageComponent from '../components/PageComponent';
import SurveyListItem from '../components/SurveyListItem';
import Tbutton from '../components/core/Tbutton';
import { useStateContext } from '../contexts/ContextProvider';


export default function Surveys() {
  //? Context
  const { surveys } = useStateContext()
  console.log(surveys)

  const onDeleteClick = () => {
    console.log('On Delete click')
  }

  return (
    <>
      <PageComponent
        title="Surveys"
        buttons={(
          <Tbutton color="green" to="/surveys/create">
            <PlusCircleIcon  className="h-6 w-6 mr-2" />
            Create new
          </Tbutton>
        )}
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {surveys.map(survey => (
            <SurveyListItem
            key={survey.id}
            survey={survey}
            onDeleteClick={onDeleteClick}
          />
          ))}
        </div>
      </PageComponent>
    </>
  )
}
