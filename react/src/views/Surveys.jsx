import PageComponent from '../components/PageComponent';
import SurveyListItem from '../components/SurveyListItem';
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
      <PageComponent title="Surveys">
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
