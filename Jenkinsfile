pipeline {
    agent any

    environment {
        IMAGE_NAME = "grocartfrontend"
        IMAGE_TAG = "latest"
        APP_PORT = "4000"
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull source code from your repo
                checkout scm
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove existing container if running
                    sh "docker rm -f ${IMAGE_NAME} || true"
                    // Run the container
                    sh "docker run -d -p ${APP_PORT}:${APP_PORT} --name ${IMAGE_NAME} ${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }
    }

    post {
        success {
            echo "Build and deployment successful!"
        }
        failure {
            echo "Build or deployment failed."
        }
    }
}
