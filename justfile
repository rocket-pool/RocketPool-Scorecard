set dotenv-load
set export

# Login to ECR
login:
    aws --profile default configure set aws_access_key_id $AWS_ACCESS_KEY_ID
    aws --profile default configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
    aws ecr get-login-password --region $DOCKER_REPO_REGION | docker login --username AWS --password-stdin $DOCKER_REPO

# Build
build:
    docker build -t scorecard.rocketpool.net:latest . -f .deploy/Dockerfile

# Login and deploy to ECR
login-and-deploy:
    aws --profile default configure set aws_access_key_id $AWS_ACCESS_KEY_ID
    aws --profile default configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
    aws ecr get-login-password --region $DOCKER_REPO_REGION | docker login --username AWS --password-stdin $DOCKER_REPO
    docker build -t scorecard.rocketpool.net:latest . -f .deploy/Dockerfile
    docker tag scorecard.rocketpool.net:latest $DOCKER_REPO/scorecard.rocketpool.net:latest
    docker push $DOCKER_REPO/scorecard.rocketpool.net:latest

# Build and deploy to ECR
deploy:
    docker build -t scorecard.rocketpool.net:latest . -f .deploy/Dockerfile
    docker tag scorecard.rocketpool.net:latest $DOCKER_REPO/scorecard.rocketpool.net:latest
    docker push $DOCKER_REPO/scorecard.rocketpool.net:latest

tag-push:
    docker tag scorecard.rocketpool.net:latest $DOCKER_REPO/scorecard.rocketpool.net:latest
    docker push $DOCKER_REPO/scorecard.rocketpool.net:latest

rmi:
    docker rmi $DOCKER_REPO/scorecard.rocketpool.net:latest

