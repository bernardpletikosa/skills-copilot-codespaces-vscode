openapi: 3.0.0
info:
    title: Comments API
    version: 1.0.0
paths:
    /comments:
        post:
            summary: Add a new comment
            requestBody:
                required: true
                content:
                    application/json:
                        schema:
                            type: object
                            properties:
                                user:
                                    type: string
                                comment:
                                    type: string
            responses:
                '201':
                    description: Comment added successfully
        get:
            summary: Retrieve comments
            parameters:
                - name: user
                    in: query
                    description: Filter comments by user
                    schema:
                        type: string
                - name: page
                    in: query
                    description: Page number for pagination
                    schema:
                        type: integer
                - name: limit
                    in: query
                    description: Number of comments per page
                    schema:
                        type: integer
            responses:
                '200':
                    description: OK
                    content:
                        application/json:
                            schema:
                                type: object
                                properties:
                                    total:
                                        type: integer
                                    page:
                                        type: integer
                                    limit:
                                        type: integer
                                    comments:
                                        type: array
                                        items:
                                            type: object
                                            properties:
                                                user:
                                                    type: string
                                                comment:
                                                    type: string
    /:
        get:
            summary: Get API information
            responses:
                '200':
                    description: OK
                    content:
                        application/json:
                            schema:
                                type: object
                                properties:
                                    title:
                                        type: string
                                    version:
                                        type: string
